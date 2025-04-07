class User_Manager{

    constructor() {
        if (this.constructor === User_Manager) {
          throw new Error("Abstract class cannot be instantiated");
        }
      }
    updatePreferences(uid, loggedUsed = null, favorites){throw new Error("Method 'updatePreferences' must be implemented");};
}
export default User_Manager;