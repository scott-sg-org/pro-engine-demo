const fetch = require('node-fetch');

const SEMGREP_BASE_URL = 'https://semgrep.dev/api/'
const SEMGREP_APP_TOKEN = 'a5ce006ad4f8d5b84f16ea1d3bd0983d8bfc83d1450269eff32b521a745f7c4a'

// Function to fetch scan results from Semgrep API
async function getSemgrepScanResults(apiUrl, apiToken) {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Semgrep scan results:', error);
  }
}

getSemgrepScanResults(apiUrl, SEMGREP_APP_TOKEN)
  .then(data => {
    console.log('Semgrep Scan Results:', JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error('Error:', error);
  });
