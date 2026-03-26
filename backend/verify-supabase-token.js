/**
 * Supabase MCP Token Verification Script
 * Run: node verify-supabase-token.js
 * 
 * This script checks that SUPABASE_ACCESS_TOKEN is properly configured
 * and can authenticate with the Supabase Management API.
 */

require('dotenv').config();

const https = require('https');

// ─── Step 1: Check if the token exists ───
const token = process.env.SUPABASE_ACCESS_TOKEN;

console.log('\n╔══════════════════════════════════════════════════════╗');
console.log('║   Supabase MCP Token Verification                    ║');
console.log('╚══════════════════════════════════════════════════════╝\n');

if (!token) {
  console.log('❌ STEP 1 FAILED: SUPABASE_ACCESS_TOKEN is NOT set.');
  console.log('   → Make sure it exists in your .env file');
  console.log('   → Or set it as a Windows environment variable');
  process.exit(1);
}

// Mask token for safe logging (show first 8 chars only)
const masked = token.substring(0, 8) + '•'.repeat(20) + token.substring(token.length - 4);
console.log(`✅ STEP 1: Token found → ${masked}`);
console.log(`   Length: ${token.length} characters`);
console.log(`   Prefix: ${token.startsWith('sbp_') ? 'Valid (sbp_)' : '⚠️ Unexpected prefix'}\n`);

// ─── Step 2: Test authentication with Supabase Management API ───
console.log('🔄 STEP 2: Testing authentication with Supabase API...\n');

const options = {
  hostname: 'api.supabase.com',
  path: '/v1/projects',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(`   HTTP Status: ${res.statusCode}`);

    if (res.statusCode === 200) {
      console.log('✅ STEP 2: Authentication SUCCESSFUL!\n');

      try {
        const projects = JSON.parse(data);

        // ─── Step 3: List available resources ───
        console.log('╔══════════════════════════════════════════════════════╗');
        console.log('║   Available Supabase Projects                        ║');
        console.log('╚══════════════════════════════════════════════════════╝\n');

        if (projects.length === 0) {
          console.log('   (No projects found in this account)\n');
        } else {
          projects.forEach((project, i) => {
            console.log(`   ${i + 1}. ${project.name}`);
            console.log(`      ID:     ${project.id}`);
            console.log(`      Region: ${project.region}`);
            console.log(`      Status: ${project.status || 'active'}`);
            console.log(`      Org:    ${project.organization_id}`);
            console.log('');
          });
        }

        console.log(`   Total projects: ${projects.length}\n`);
      } catch (e) {
        console.log('   ⚠️ Could not parse response, but auth was successful.\n');
      }

      // ─── Final verdict ───
      console.log('╔══════════════════════════════════════════════════════╗');
      console.log('║   ✅ ALL CHECKS PASSED                               ║');
      console.log('║   supabase-mcp-server should work without errors.    ║');
      console.log('║                                                       ║');
      console.log('║   Run it with:  npm run mcp                          ║');
      console.log('╚══════════════════════════════════════════════════════╝\n');

    } else if (res.statusCode === 401) {
      console.log('❌ STEP 2 FAILED: Authentication REJECTED (401 Unauthorized)');
      console.log('   → Your token may be expired or revoked.');
      console.log('   → Generate a new one at:');
      console.log('     https://supabase.com/dashboard/account/tokens\n');
    } else if (res.statusCode === 403) {
      console.log('❌ STEP 2 FAILED: Access FORBIDDEN (403)');
      console.log('   → Your token does not have sufficient permissions.\n');
    } else {
      console.log(`❌ STEP 2 FAILED: Unexpected status ${res.statusCode}`);
      console.log(`   Response: ${data.substring(0, 200)}\n`);
    }
  });
});

req.on('error', (error) => {
  console.log('❌ STEP 2 FAILED: Network error');
  console.log(`   ${error.message}`);
  console.log('   → Check your internet connection.\n');
});

req.end();
