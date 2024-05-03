/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    cacheOnFrontendNav: true,
    aggressiveFrontEndNavCaching: true,
    cacheStartUrl: "/",
    dynamicStartUrl: true,
    dynamicStartUrlRedirect: "/sign-in",
    reloadOnOnline: true,
    swMinify: true,
    disable: false,
    workboxOptions: {
        disableDevLogs: true,
    },
});

const nextConfig = {};

export default withPWA(nextConfig);
