import request from "supertest";

import { expect } from "chai";

const url = "http://localhost:3000";
const enrtyData = {
    "name": "user",
    "email": "user@gmail.com",
    "password": "user123"
};
const emailAndPass ={
    "email": "user@gmail.com",
    "password": "user123"
};
const updatedData = {
    "name": "user1",
    "email": "user1@gmail.com",
    "password": "user1234"
};
const wrongEmailAndPass ={
    "email": "user999@gmail.com",
    "password": "user12399"
};

function getToken(loginData) {
    return new Promise((resolve, reject) => {
      request(url)
        .post("/api/v1/auth")
        .send(loginData)
        .end((err, res) => {
          if (err) {
            reject(err);
          } else {
            const token = res.body.token;
            resolve(token);
          }
        });
    });
  }
  

describe('Testing Routes', () => {


    
    it('should delete all users', async () => {
       
        const key="keyadmin123";
        const response = await request (url)
                 .delete ('/api/v1/all-users')
                 .send ({
                   key_admin : key
               })
               expect(response.status).equal(200)
               expect(response.body).to.have.property('message', 'Users deleted with success'); 
             
               
               
           });
     it('should not delete all users as wrong adminkey', async () => {
       
        const key="wrongkey";
        const response = await request (url)
                 .delete ('/api/v1/all-users')
                 .send ({
                   key_admin : key
               })
               expect(response.status).equal(403)
               expect(response.body).to.have.property('message', 'Unauthorized access'); 
             
               
               
           });       



    it('should create new user and return message ', async () => {
       
        const response = await request(url)
                 .post ('/api/v1/users')
                 .send (enrtyData)

               expect(response.body).to.have.property('message', 'User registered with success'); 
               expect(response.status).equal(200)
               
           });
           
     it('should not create new user and return message ', async () => {
       

        const response = await request(url)
                 .post ('/api/v1/users')
                 .send (enrtyData)

               expect(response.body).to.have.property('message', 'User already registered'); 
               expect(response.status).equal(401)
               
           });         


    it('should authenticate user', async () => {
       

           const response = await request(url)
                 .post ('/api/v1/auth')
                 .send (
                   
                   emailAndPass
               )
              expect(response.status).equal(200)
               expect(response.body).to.have.property('token');
           });

     it('should not authenticate user as wrong email or password', async () => {
       

           const response = await request(url)
                 .post ('/api/v1/auth')
                 .send (
                   
                   wrongEmailAndPass
               )

               
              expect(response.status).equal(401)
              expect(response.body).to.have.property('message', 'Incorrect email or password'); 
               
           });      


    it('should get user by token', async () => {
       
            const token = await getToken(
                
               emailAndPass
            )

           
            const response = await request(url)
            .get("/api/v1/users")
            .set('Authorization', token);
         expect(response.status).equal(200);
           expect(response.body).to.have.property("id");
          expect(response.body).to.have.property("name");
          expect(response.body).to.have.property("email");
          expect(response.body).to.have.property("imageUrl");
         
            });


     it('should not get user by adding wrong token', async () => {
       
            const token = "qq";
            const response = await request(url)
            .get("/api/v1/users")
            .set('Authorization', token);
         expect(response.status).equal(403);
           expect(response.body).to.have.property('message', 'Unauthorized'); 
        
            });
        

    it('should patch user data by token', async () => {
       
                const token = await getToken(
                    emailAndPass
                )
    
               
                const response = await request(url)
                .patch("/api/v1/users")
                .set('Authorization', token)
                .send({
                    updatedData
                });
             expect(response.status).equal(200);
             expect(response.body).to.have.property('message', 'User updated with success!'); 

            });
     

    it('should delete user data by token', async () => {
       
                const token = await getToken(
                    emailAndPass
                )

                const response = await request(url)
                .delete("/api/v1/users")
                .set('Authorization', token)
             expect(response.status).equal(200);
             expect(response.body).to.have.property('message', 'User deleted with success!'); 

            });

        });