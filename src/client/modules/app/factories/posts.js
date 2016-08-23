export default [
	(() => {
		const service = {
			posts: [],

			add(title, link, rating = 0) {
				if (title) {
					this.posts.push({ title, link, rating });
					return true;
				}
				return false;
			}
		};

		return () => service;
	})()
];