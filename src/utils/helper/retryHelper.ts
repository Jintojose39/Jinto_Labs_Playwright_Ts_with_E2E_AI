export async function retryAction(
     action: () => Promise<void>,
     retries: number = 3,
     delay: number = 1000
   ): Promise<void> {
   
     for (let attempt = 1; attempt <= retries; attempt++) {
       try {
         await action();
         return;
       } catch (error) {
   
         if (attempt === retries) {
           throw error;
         }
   
         console.log(`Retrying action... Attempt ${attempt}`);
   
         await new Promise(resolve => setTimeout(resolve, delay));
       }
     }
   }