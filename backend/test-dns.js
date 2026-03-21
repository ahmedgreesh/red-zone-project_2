const dns = require('dns');

const host = 'db.oquonznyiripsznljisp.supabase.co';

dns.lookup(host, (err, address, family) => {
    if (err) {
        console.error('DNS Lookup failed:', err);
        return;
    }
    console.log('Address:', address);
    console.log('Family:', family);
});
