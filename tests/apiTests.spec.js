import { test, expect } from '@playwright/test';

 
 //POST request

 test('API POST request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Rajitha",
            "job": "student"
        }
    })
    //assertions
    expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain('Rajitha') // should pass the test
    //expect(text).toContain('George') // should fail the test
    expect(text).toContain('student') // should pass the test
    //expect(text).toContain('manager') // should fail the test
    console.log(await response.json());
});

//GET request
test('API GET request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2')

    //assertions
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Janet') // should pass the test
    //expect(text).toContain('George') // should fail the test

    console.log(await response.json());

    //PUT request
    test('API PUT request', async ({ request }) => {
        const response = await request.put('https://reqres.in/api/users/2', {
            data: {
                "name": "Rajitha",
                "job": "Student"
            }
        })
        //assertions
        expect(response.status()).toBe(200);
        const text = await response.text();
        expect(text).toContain('Rajitha') // should pass the test
        //expect(text).toContain('George') // should fail the test
        expect(text).toContain('Student') // should pass the test
        //expect(text).toContain('manager') // should fail the test
        console.log(await response.json());
    });

    // DELETE API request
    test('Demo API DELETE Request', async ({ request }) => {

        const response = await request.delete("https://reqres.in/api/users/2")
        expect(response.status()).toBe(204);
    });

   

});