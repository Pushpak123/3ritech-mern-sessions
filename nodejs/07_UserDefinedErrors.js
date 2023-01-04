try {
    const a = 1;
    const c = (a + b);
    console.log(`c: ${c}`);
} catch(err) {
    console.log(`error: ${err}`);
} finally {
    console.log(`finally this is executed`)
}