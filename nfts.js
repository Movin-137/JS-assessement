/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nfts=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (n_name,n_superpower,n_weakness,n_type) {
    const superhero={"name":n_name,
                    "superpower":n_superpower,
                    "weakness":n_weakness,
                    "type":n_type};
    nfts.push(superhero);
    console.log("Minted: "+superhero.name); 
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<nfts.length;i++)
        {
           console.log("\nID: "+(i+1));
           console.log("Name: "+nfts[i].name);
           console.log("Superpower: "+nfts[i].superpower);
           console.log("Weakness: "+nfts[i].weakness);
           console.log("Type: "+nfts[i].type);
        }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number of nfts are: "+nfts.length);

}

// call your functions below this line
mintNFT("Superman","Invincible","Kryptonite","DC");
mintNFT("Ironman","Genius","Heart","Marvel");
mintNFT("Hulk","Monsterous Power","Betty","Marvel");
mintNFT("Batman","Wealthy","Mortal","DC");

listNFTs();
getTotalSupply();
