const resolvers = {
    Query: {
      thoughts: async () => {
        return Thought.find().sort({ createdAt: -1 });
      }
    }
  };