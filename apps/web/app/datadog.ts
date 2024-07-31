// Necessary if using App Router to ensure this file runs on the client
"use client";
    
import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
    applicationId: process.env.NEXT_PUBLIC_DATADOG_APP_ID ?? "",
    clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN ?? "",
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'datadoghq.com',
    service: 'base-org',
    env: process.env.NODE_ENV,
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask"
    // Specify URLs to propagate trace headers for connection between RUM and backend trace

});

export default function DatadogInit() {
    // Render nothing - this component is only included so that the init code
    // above will run client-side
    return null;
}
