import User_Catalog from "./User_Catalog.js";
import User_Manager from "./User_Manager.js";

class User_Catalog_Proxy extends User_Manager {
  constructor() {
    super();
    // Use the imported singleton instance directly
    this.userCatalog = User_Catalog;
  }

  static getInstance() {
    if (!User_Catalog_Proxy.instance) {
      User_Catalog_Proxy.instance = new User_Catalog_Proxy();
    }
    return User_Catalog_Proxy.instance;
  }

  validateAllowedUser(uid, loggedUser = null) {
    if (loggedUser == null) {
      throw new Error("User not logged in");
    }
    if (uid != loggedUser) {
      throw new Error("User not allowed to update preferences");
    }
    return true;
  }
  
  updatePreferences(uid, loggedUser = null, favorites) {
    try {
      this.validateAllowedUser(uid, loggedUser);
      const result = this.userCatalog.updatePreferences(uid, loggedUser, favorites);
      return result;
    } catch (error) {
      console.error(error);
      return {message: "User not allowed to update preferences"};
    }
  }
}

export default User_Catalog_Proxy;