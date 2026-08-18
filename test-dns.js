import dns from "node:dns/promises";

try {
    const result = await dns.resolveSrv(
        "_mongodb._tcp.cluster0.ngqxj0m.mongodb.net"
    );

    console.log(result);
} catch (error) {
    console.error(error);
}