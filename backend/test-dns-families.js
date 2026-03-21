const dns = require('dns');

const host = 'db.oquonznyiripsznljisp.supabase.co';

dns.lookup(host, { family: 6 }, (err, address, family) => {
    if (err) {
        console.error('IPv6 DNS Lookup failed:', err);
    } else {
        console.log('IPv6 Address:', address);
    }
});

dns.lookup(host, { family: 4 }, (err, address, family) => {
    if (err) {
        console.error('IPv4 DNS Lookup failed:', err);
    } else {
        console.log('IPv4 Address:', address);
    }
});
