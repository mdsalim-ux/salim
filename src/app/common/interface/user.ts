export class ILogin {
    userName!: string;
    password!: string;
}
export class IRegister {
    userName!: string;
    email!: string;
    password!: string;
}
export class IRefreshToken {
    jwtToken!: "string";
    refreshToken!: "string";
}
export class loginData{
  LoginData=[
    {
      "username": "ProS",
      "phone": "7739238924",
    }
  ]
}
export class AgGirdData {
    AgGirdData= [
        {
          "username": "Md Salim",
          "phone": "8971525470",
          "email": "mdsalimalam8@gmail.com",
          "skills": "Angular",
          "id": 1
        },
        {
          "username": "Md Salim",
          "phone": "8971525470",
          "email": "mdsalimalam8@gmail.com",
          "skills": "Angular",
          "id": 2
        },
        {
          "username": "Md Salim",
          "phone": "8971525470",
          "email": "mdsalimalam8@gmail.com",
          "skills": "SQL",
          "id": 3
        },
        {
          "username": "Md Salim",
          "phone": "8971525470",
          "email": "mdsalimalam8@gmail.com",
          "skills": "ASP.NET",
          "id": 5
        },
        {
          "username": "Md Salim",
          "phone": "8971525470",
          "email": "mdsalimalam8@gmail.com",
          "skills": "ASP.NET",
          "id": 6
        },
        {
          "username": "Md Salim",
          "phone": "8971525470",
          "email": "mdsalimalam8@gmail.com",
          "skills": "ASP.NET",
          "id": 7
        },
        {
          "username": "Md Salim",
          "phone": "8971525470",
          "email": "mdsalimalam8@gmail.com",
          "skills": "ASP.NET",
          "id": 8
        },
        {
          "username": "Md Salim",
          "phone": "8971525470",
          "email": "mdsalimalam8@gmail.com",
          "skills": "ASP.NET",
          "id": 9
        },
        {
          "username": "Salim",
          "phone": "8971525470",
          "email": "mdsalim@gmail.com",
          "skills": "JavaScript",
          "id": 10
        },
        {
            "username": "Md Salim",
            "phone": "8971525470",
            "email": "mdsalimalam8@gmail.com",
            "skills": "Angular",
            "id": 11
          },
          {
            "username": "Md Salim",
            "phone": "8971525470",
            "email": "mdsalimalam8@gmail.com",
            "skills": "Angular",
            "id": 12
          },
          {
            "username": "Md Salim",
            "phone": "8971525470",
            "email": "mdsalimalam8@gmail.com",
            "skills": "SQL",
            "id": 13
          },
          {
            "username": "Md Salim",
            "phone": "8971525470",
            "email": "mdsalimalam8@gmail.com",
            "skills": "ASP.NET",
            "id": 14
          },
          {
            "username": "Md Salim",
            "phone": "8971525470",
            "email": "mdsalimalam8@gmail.com",
            "skills": "ASP.NET",
            "id": 15
          },
          {
            "username": "Md Salim",
            "phone": "8971525470",
            "email": "mdsalimalam8@gmail.com",
            "skills": "ASP.NET",
            "id": 16
          },
          {
            "username": "Md Salim",
            "phone": "8971525470",
            "email": "mdsalimalam8@gmail.com",
            "skills": "ASP.NET",
            "id": 17
          },
          {
            "username": "Md Salim",
            "phone": "8971525470",
            "email": "mdsalimalam8@gmail.com",
            "skills": "ASP.NET",
            "id": 18
          },
          {
            "username": "Salim",
            "phone": "8971525470",
            "email": "mdsalim@gmail.com",
            "skills": "JavaScript",
            "id": 19
          }
    ] 
}

export class EmployeeData {
  Skills = [
      { skillId: 1, skillName: 'HTML', technologyId:1,technologyName:'Frontend'},
      { skillId: 2, skillName: 'CSS',technologyId:1,technologyName:'Frontend' },
      { skillId: 3, skillName: 'JavaScript',technologyId:1,technologyName:'Frontend'},
      { skillId: 4, skillName: 'Angular' ,technologyId:1,technologyName:'Frontend'},
      { skillId: 5, skillName: 'C#',technologyId:2,technologyName:'Backend'},
      { skillId: 6, skillName: 'MVC' ,technologyId:2,technologyName:'Backend'},
      { skillId: 7, skillName: 'SQL' ,technologyId:2,technologyName:'Database'},
      { skillId: 9, skillName: 'Jquery' ,technologyId:1,technologyName:'Frontend'},
  ]
  Designations = [
      {designationId:1,designationName:'Associate Software Engineer'},
      {designationId:2,designationName:'Software Engineer'},
      {designationId:3,designationName:'Senior Software Engineer'}
  ]
  Employees = [
    { employeeId:1, employeeName: 'Md Salim', email: 'mdsalimalam8@gmail.com', designationName: 'Software Engineer', gEmployeeSkills: [{ skillId: 1,isCertified:true,certificationCompletionDate:new Date() }, { skillId: 2,isCertified:false,certificationCompletionDate:null }] },
  ]
}