import { test, expect } from '@playwright/test';
import genUniqueId from './utils/getUniqueId';

const baseURL = "https://demoqa.com"
const user = `testUserName-${genUniqueId()}`
const validPassword = "V@lidP@ssw0rd"

test.describe.serial('Generate a new User, Add some books and then remove one of them', () => {
  let userId: String

  test('Create a new user with valid data', async({ request }) => {
    const response = await request.post(`${baseURL}/Account/V1/User`, {
      data: {
        userName: `${user}`,
        password: `${validPassword}`
      }
    })
    expect(response.status()).toBe(201)
    const responseBody = JSON.parse(await response.text())
    expect(responseBody.username).toBe(`${user}`)
    expect(responseBody.userID).toBeTruthy()
    userId = responseBody.userID
  })
  
  test('Create a new user with invalid password', async({ request }) => {
    const response = await request.post(`${baseURL}/Account/V1/User`, {
      data: {
        userName: `${user}`,
        password: "ThisIsEasyToHack"
      }
    })
    expect(response.status()).toBe(400)
    const responseBody = JSON.parse(await response.text())
    expect(responseBody.code).toBe("1300")
    expect(responseBody.message).toBe("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.")
  })
  
  test('Add a list of book for the created authorized User', async({ request }) => {
    const tokenResponse = await request.post(`${baseURL}/Account/V1/GenerateToken`, {
      data: {
        userName: `${user}`,
        password: `${validPassword}`
      }
    })
    const tokenResponseBody = JSON.parse(await tokenResponse.text())
    const token = tokenResponseBody.token
  
    const response = await request.post(`${baseURL}/BookStore/V1/Books`, {
      data: {
        userId: `${userId}`,
        collectionOfIsbns: [
          {
            isbn: "FirstISBN"
          },
          {
            isbn: "SecondISBN"
          },
          {
            isbn: "ThirdISBN"
          }
        ]
      },
      headers: {
        'Authorization': `Bearer ${token}`
        }
    })
    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(201)
    expect(responseBody.books[0].isbn).toBe("FirstISBN")
    expect(responseBody.books[1].isbn).toBe("SecondISBN")
    expect(responseBody.books[2].isbn).toBe("ThirdISBN")
  })

  test('Add a list of book for an Unauthorized User', async({ request }) => {  
    const response = await request.post(`${baseURL}/BookStore/V1/Books`, {
      data: {
        userId: `${userId}`,
        collectionOfIsbns: [
          {
            isbn: "FirstISBN"
          },
          {
            isbn: "SecondISBN"
          },
          {
            isbn: "ThirdISBN"
          }
        ]
      },
      headers: {
        'Authorization': `Wrong Code!`
        }
    })
    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(401)
    expect(responseBody.code).toBe("1200")
    expect(responseBody.message).toBe("User not authorized!")
  })

  test('Delete a book from list of created user books', async({ request }) => {
    const tokenResponse = await request.post(`${baseURL}/Account/V1/GenerateToken`, {
      data: {
        userName: `${user}`,
        password: `${validPassword}`
      }
    })
    const tokenResponseBody = JSON.parse(await tokenResponse.text())
    const token = tokenResponseBody.token
  
    const response = await request.delete(`${baseURL}/BookStore/V1/Book`, {
      data: {
        userId: `${userId}`,
        isbn: "SecondISBN"
      },
      headers: {
        'Authorization': `Bearer ${token}`
        }
    })
    expect(response.status()).toBe(204)
  })

  test('Delete a non-existed book from list of created user books', async({ request }) => {
    const tokenResponse = await request.post(`${baseURL}/Account/V1/GenerateToken`, {
      data: {
        userName: `${user}`,
        password: `${validPassword}`
      }
    })
    const tokenResponseBody = JSON.parse(await tokenResponse.text())
    const token = tokenResponseBody.token
  
    const response = await request.delete(`${baseURL}/BookStore/V1/Book`, {
      data: {
        userId: `${userId}`,
        isbn: "Nothing!"
      },
      headers: {
        'Authorization': `Bearer ${token}`
        }
    })
    expect(response.status()).toBe(400)
  })
})