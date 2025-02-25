const validateJSONData = async (jsonData, topicsData) => {
  let groupedErrors = {};  // Group errors by Question ID

  jsonData.forEach((item) => {
    const questionId = item.tag_names.find((tag) => tag.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/));

    // If no UUID is found, raise an error
    if (!questionId) {
      if (!groupedErrors[questionId]) {
        groupedErrors[questionId] = [];
      }
      groupedErrors[questionId].push({
        message: "Invalid or missing Question ID (UUID) in tag_names.",
        description: "Each question must have a valid UUID in the 'tag_names' array.",
      });
      return; // Skip this item as it's invalid
    }

    const tagNames = new Set(item.tag_names || []);

    // ✅ **Check for IS_PUBLIC or IS_PRIVATE**
    if (!tagNames.has("IS_PUBLIC") && !tagNames.has("IS_PRIVATE")) {
      if (!groupedErrors[questionId]) {
        groupedErrors[questionId] = [];
      }
      groupedErrors[questionId].push({
        message: "Tag_names must contain either IS_PUBLIC or IS_PRIVATE.",
        description: "Every question must have a visibility tag. It determines if a question is publicly accessible or private.",
      });
    }

    // ✅ **Check for required tags: POOL_1 and IN_OFFLINE_EXAM**
    const requiredTags = ["POOL_1", "IN_OFFLINE_EXAM"];
    requiredTags.forEach((tag) => {
      if (!tagNames.has(tag)) {
        groupedErrors[questionId] = groupedErrors[questionId] || [];
        groupedErrors[questionId].push({
          message: `Missing required tag: ${tag}`,
          description: `Each question must contain the tag "${tag}" to ensure it is correctly categorized.`,
        });
      }
    });

    // Initialize flags for topic, sub-topic, and difficulty
    let topicValid = false;
    let subTopicValid = false;
    let difficultyValid = false; // Initialize difficultyValid

    // Check for valid topic and sub-topic
    tagNames.forEach((tag) => {
      // ✅ **Check for topic**
      if (tag.startsWith("TOPIC_")) {
        const topicFound = Object.values(topicsData).some((sectionTags) =>
          sectionTags.some((topic) => topic.topic_name?.value === tag)
        );
        if (!topicFound) {
          groupedErrors[questionId] = groupedErrors[questionId] || [];
          groupedErrors[questionId].push({
            message: `${tag} is not a valid topic name.`,
            description: `The topic "${tag}" is not present in any section.`,
          });
        } else {
          topicValid = true;
        }
      }

      // ✅ **Check for sub-topic**
      if (tag.startsWith("SUB_TOPIC_")) {
        const subTopicFound = Object.values(topicsData).some((sectionTags) =>
          sectionTags.some((topic) =>
            topic.sub_topics.some((sub) => sub.sub_topic_name?.value === tag)
          )
        );
        if (!subTopicFound) {
          groupedErrors[questionId] = groupedErrors[questionId] || [];
          groupedErrors[questionId].push({
            message: `${tag} is not a valid sub-topic name.`,
            description: `The sub-topic "${tag}" is not found in any section.`,
          });
        } else {
          subTopicValid = true;
        }
      }

      // ✅ **Validate difficulty levels (if needed)**
      if (tag.startsWith("DIFFICULTY_")) {
        const difficultyFound = ["DIFFICULTY_EASY", "DIFFICULTY_MEDIUM", "DIFFICULTY_HARD"].includes(tag);
        if (difficultyFound) {
          difficultyValid = true;
        }
      }
    });

   

   

    // ✅ **Validate difficulty levels**
    if (!difficultyValid) {
      if (!groupedErrors[questionId]) {
        groupedErrors[questionId] = [];
      }
      groupedErrors[questionId].push({
        message: "Tag_names must contain a valid difficulty level.",
        description: "Each question must have at least one difficulty level: DIFFICULTY_EASY, DIFFICULTY_MEDIUM, or DIFFICULTY_HARD.",
      });
    }
  });
  

  return groupedErrors;
};

export default validateJSONData;
