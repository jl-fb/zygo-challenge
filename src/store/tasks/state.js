export default function() {
  return {
    tasks: {
      url1: {
        title: "First",
        order: 1,
        completed: true,
        url: "aaa"
      },
      url2: {
        title: "Second",
        order: 2,
        completed: false,
        url: "eeerer"
      },
      url3: {
        title: "Abelha",
        order: 2,
        completed: false,
        url: "eeerer"
      }
    },
    search: "",
    sort: "title",
    onlyCompleted: false,
    onlyTodo: false
  };
}
