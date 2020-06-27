export const Authenticate = (userName: string, password: string) => {

    if (userName === "Admin" && password === "Admin") {
        return true;
    }
    else {
        return false;
    }

}