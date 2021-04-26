const assert = require('assert');
const firebase = require('@firebase/testing');
const MY_PROJECT_ID = "flutter-firebase-38043";

describe("My firebase app", () =>{

    it("Can perform basic addition", ()=>{
        assert.equal(2+2,4);
    });

    it("Can write docuemnts with same id as user",async() =>{
        const myAuth = {uid: "user_abc" };
        const db = firebase.initializeTestApp({projectId: MY_PROJECT_ID, auth: myAuth}).firestore();
        const testDoc = db.collection("users").doc("user_abc");
        await firebase.assertSucceeds(testDoc.set({foo:"bar"}));
    });

    it("Can't write docuemnts with different id as user",async() =>{
        const myAuth = {uid: "user_abc" };
        const db = firebase.initializeTestApp({projectId: MY_PROJECT_ID, auth: myAuth}).firestore();
        const testDoc = db.collection("users").doc("user_xyz");
        await firebase.assertFails(testDoc.set({foo:"bar"}));
    });

    it("Can read docuemnts with level=user",async() =>{
        const myAuth = {uid: "user_abc" };
        const db = firebase.initializeTestApp({projectId: MY_PROJECT_ID, auth: myAuth}).firestore();
        const testDoc = db.collection("users").doc("user_cde");
        await firebase.assertSucceeds(testDoc.get());
    });

    it("Can write docuemnts with level=user",async() =>{
        const myAuth = {uid: "user_abc" };
        const db = firebase.initializeTestApp({projectId: MY_PROJECT_ID, auth: myAuth}).firestore();
        const testDoc = db.collection("users").doc("user_cde");
        await firebase.assertSucceeds(testDoc.set({foo:"bar"}));
    });

    it("Can read docuemnts with same id as user",async() =>{
        const myAuth = {uid: "user_abc" };
        const db = firebase.initializeTestApp({projectId: MY_PROJECT_ID, auth: myAuth}).firestore();
        const testDoc = db.collection("users").doc("user_abc");
        await firebase.assertSucceeds(testDoc.get());
    });

    it("Can't read docuemnts with different id as user",async() =>{
        const myAuth = {uid: "user_abc" };
        const db = firebase.initializeTestApp({projectId: MY_PROJECT_ID, auth: myAuth}).firestore();
        const testDoc = db.collection("users").doc("user_xyz");
        await firebase.assertFails(testDoc.get());
    });
})