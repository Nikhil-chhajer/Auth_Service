const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');
const bcrypt = require('bcrypt');
class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;

        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw error;
        }
    }
    async signIn(email, plainPassword) {
        try {
            //step 1->fetch the user using email
            const user = await this.userRepository.getbyEmail(email);
            //step 2->compare incoming plain password with the encrypted password
            const passwordMatch = this.checkPassword(plainPassword, user.password);
            //step 3->if password matches then crate token and send to user
            if (!passwordMatch) {
                console.log("Password doesnt match");
                throw { errot: "incorrect password" };
            }
            const newJWT = this.createToken({ email: user.email, id: user.id });
            return newJWT;

        } catch (error) {
            console.log("Something went wrong in sign in");
            throw error;
        }
    }
    async isAuthenticated(token){
        try {
            const response=this.verifyToken(token);
            if (!response) {
                throw{error:"Invalid token"};
                
            }
            const user=await this.userRepository.getById(response.id);
            if(!user){
                throw{error:"No User with corresponding token"};

            }
            return user.id;
        } catch (error) {
            console.log("Something went wrong in auth process");
            throw error;
            
        }
    }
    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, { expiresIn: '1d' });
            return result;

        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;

        }
    }
    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;


        } catch (error) {
            console.log("Something went wrong in token validation");
            throw error;
        }

    }
    checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);

        } catch (error) {
            console.log("Something went wrong in password comparison");
            throw error;
        }

    }
}
module.exports = UserService;