// dataGenerator.ts

export function randomPassword(length: number = 12): string {
     const chars =
       'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
   
     let password = '';
   
     for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * chars.length);
       password += chars[randomIndex];
     }
   
     return password;
   }
   
   export function generateRandomName(): string {
     const firstNames = ['Jinto', 'Rahul', 'Anu', 'Arjun', 'Neha', 'Kiran'];
     const lastNames = ['Jose', 'Kumar', 'Sharma', 'Nair', 'Reddy', 'Menon'];
   
     const randomFirst =
       firstNames[Math.floor(Math.random() * firstNames.length)];
     const randomLast =
       lastNames[Math.floor(Math.random() * lastNames.length)];
   
     return `${randomFirst}${randomLast}${Math.floor(Math.random() * 1000)}`;
   }


   export interface RandomUserProfile {
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
   }

   export function generateRandomUserProfile(): RandomUserProfile {
          const firstNames = ['Jinto', 'Rahul', 'Anu', 'Arjun', 'Neha', 'Kiran'];
          const lastNames = ['Jose', 'Kumar', 'Sharma', 'Nair', 'Reddy', 'Menon'];
        
          const companies = ['TechNova', 'InnoSoft', 'CloudMatrix', 'NextGen Labs', 'BrightEdge'];
          const states = ['Kerala', 'Karnataka', 'Tamil Nadu', 'Maharashtra', 'Delhi'];
          const cities = ['Kochi', 'Bangalore', 'Chennai', 'Mumbai', 'New Delhi'];
        
          const getRandom = (arr: string[]) =>
            arr[Math.floor(Math.random() * arr.length)];
        
          const randomNumber = Math.floor(100 + Math.random() * 900);
          const uniqueNumber = Math.floor(1000 + Math.random() * 9000);
        
          return {
            firstName: getRandom(firstNames),
            lastName: getRandom(lastNames),
            company: `${getRandom(companies)} Pvt Ltd`,
            address: `Street ${randomNumber}, Building ${Math.floor(Math.random() * 50)}`,
            state: getRandom(states),
            city: getRandom(cities),
            zipcode: `${Math.floor(100000 + Math.random() * 900000)}`,
            mobileNumber: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
          }
     }
   