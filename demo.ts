/// <reference lib="deno.unstable" />

export const db = await Deno.openKv();

await db.set(["visits"], new Deno.KvU64(0n)); // 0n -> bigint, used for big numbers to give more prescition

await db.atomic().sum(["visits"], 1n).commit();
// Atomic operation is used to give order to the execution of operations, to give asynchronisity to the order of operations, to know which operations is being execution first. This ensures consistency of data.


export const LastVisit = await db.get<Deno.KvU64>(["visits"]);
console.log(LastVisit);
