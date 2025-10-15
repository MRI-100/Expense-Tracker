import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    // Catch-all route for 404
    route("*", "routes/not-found.tsx"),

] satisfies RouteConfig;
