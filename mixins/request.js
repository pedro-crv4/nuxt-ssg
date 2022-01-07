export default {
    methods: {
        request() {
            const baseURL = "https://fakestoreapi.com";

            const instance = this.$axios.create({
                baseURL,
                headers: { 'Content-Type': 'application/json' },
            });

            return instance;
        },
    },
};
