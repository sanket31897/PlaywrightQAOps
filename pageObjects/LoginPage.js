class LoginPage{

constructor(page){
   this.page=page;
   this.username = page.locator("[placeholder='email@example.com']");
   this.password = page.locator("[placeholder='enter your passsword']");
   this.signIn = page.locator(".btn.btn-block.login-btn");
}

async goTO(){
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");

}

async Login(username, password){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.signIn.click();
    await this.page.waitForLoadState('networkidle');

}







}

module.exports= {LoginPage};