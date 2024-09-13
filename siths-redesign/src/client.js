import { createClient } from "@sanity/client";

export default createClient({
  projectId: 'cb6mdrtg',   
  dataset: 'website-data', 
  apiVersion: '2023-09-12', 
  useCdn: true,      
       
});
