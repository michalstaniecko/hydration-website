<script setup lang="ts">
import markdownit from 'markdown-it';

const md = markdownit();

const result = md.render(`
# Privacy Policy

Effective Date: 29.04.2025

## Introduction

Thank you for using our app ("the App"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data when you use the App. By using the App, you agree to the terms outlined in this Privacy Policy.

## Data Collection and Storage

### No Account or Login Required
The App does not require you to create an account or log in to use its features. All data generated within the App is stored locally on your device.

### Local Data Storage
The App uses **AsyncStorage**, a local storage solution, to securely store your daily water intake records. This data remains on your device and is not transmitted to any external servers or third parties.

### No Data Sharing
The App does not collect, share, or transmit any personal or usage data to external servers, advertising networks, or third parties. Your data is completely private and accessible only to you.

## Third-Party Services

The App does not currently integrate with any third-party services, including advertising, analytics, or tracking modules.

## Data Security

We take reasonable measures to ensure that the data stored locally on your device is secure. However, please be aware that the security of your device is ultimately your responsibility. We recommend enabling device-level security features (e.g., passcodes, biometric authentication) to protect your data.

## Children's Privacy

The App is not intended for use by children under the age of 13. We do not knowingly collect or solicit any personal information from children under 13. If you believe that a child under 13 has used the App and provided data, please contact us, and we will assist you in removing such data.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in legal requirements, our practices, or the App's features. Any changes will be posted within the App or on our website, with the updated "Effective Date" at the top of this policy. Continued use of the App after such changes indicates your acceptance of the updated Privacy Policy.

## Contact Us

If you have any questions, concerns, or feedback regarding this Privacy Policy, you can contact us at:

**Email:** michal.staniecko@gmail.com
**Website:** hydration.ihumbak.website

---

By using the App, you confirm that you have read and understood this Privacy Policy.
`)
</script>

<template>
  <div class="p-5">
    <div>push test</div>
    <div class="prose-sm md:prose lg:prose-lg" v-html="result"/>
  </div>
</template>

<style scoped>

</style>
