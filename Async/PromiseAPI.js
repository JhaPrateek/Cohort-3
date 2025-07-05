const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 resolved"); // Resolves in 3 seconds
    }, 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P2 error"); // Rejects in 1 second
    }, 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 resolved"); // Resolves in 2 seconds
    }, 2000);
});


// ✅ Promise.any: returns first resolved (ignores errors)
Promise.any([p1, p2, p3])
    .then((data) => {
        console.log("✅ Promise.any result:", data); // "P3 resolved"
    })
    .catch((err) => {
        console.log("❌ Promise.any error:", err);
    });


// ✅ Promise.all: waits for all to succeed or fails on first error
Promise.all([p1, p2, p3])
    .then((data) => {
        console.log("✅ Promise.all result:", data); 
    })
    .catch((err) => {
        console.log("❌ Promise.all error:", err); // "P2 error" (after 1 second)
    });


// ✅ Promise.race: returns first settled (resolved OR rejected)
Promise.race([p1, p2, p3])
    .then((data) => {
        console.log("✅ Promise.race result:", data); // Won't reach here
    })
    .catch((err) => {
        console.log("❌ Promise.race error:", err); // "P2 error" (after 1 second)
    });


// ✅ Promise.allSettled: waits for all, gives status/result of each
Promise.allSettled([p1, p2, p3])
    .then((results) => {
        console.log("✅ Promise.allSettled results:");
        results.forEach((result, index) => {
            console.log(`P${index + 1}:`, result);
        });
    });
