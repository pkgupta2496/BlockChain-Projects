
var contract_address = "0xCF03E72C161B3094CCa9de29B631E511c189C02a"

// var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/aaeccd18c4094239b1d1c4f903b02f34"));

var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

var abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_decimal",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "BidDetails",
		"outputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "bidAmount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenOwner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tokenHash",
				"type": "string"
			}
		],
		"name": "buy",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "buyNft",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tokenHash",
				"type": "string"
			}
		],
		"name": "getPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tokenHash",
				"type": "string"
			}
		],
		"name": "getTopBid",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "tokenHash",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "nftPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tokenHash",
				"type": "string"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tokenHash",
				"type": "string"
			}
		],
		"name": "submitBid",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
// var web3 = new Web3(window.ethereum);

var contract = new web3.eth.Contract( abi , contract_address );
var accounts

window.addEventListener('load', async function () {
	// accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	accounts = await web3.eth.getAccounts();
	console.log("web3 :", web3 ); 
	console.log("Accounts :", accounts);
    console.log("contract : ", contract);     


	
	$.ajax({
        url: 'student/',
        method: 'GET',
        // data: fd,
        processData : false ,
        contentType : false,
        success: (result) => {
            console.log("result:", result.data)
			const size = result.data.length
			console.log("size:",size)

			
			
			for(i = 0; i<size; i++){
			let card =`<div class="card">
						<img src="https://gateway.pinata.cloud/ipfs/${result.data[i].imageHash}" class="card-img-top" length = 300 width =300 alt="...">
						<div class="card-body">
			  				<h4 class="card-title">${result.data[i].name} </h4>
			  				<h4 class="card-text">${result.data[i].price} ETH </4>
							<p id = ${result.data[i].name} hidden >${result.data[i].imageHash}</p>
						</div>
						<button type="button" class="btn btn-primary" id = ${result.data[i]._id} price = ${result.data[i].price} hash = ${result.data[i].imageHash}  onclick = "buyNFT(this)" >BUY</button>
						<button type="button" class="btn btn-primary"  hash = ${result.data[i].imageHash}  onclick = "ownerOf(this)" >OwnerOf</button> <br/>	 	
						<input type = "number" id="input_${result.data[i]._id}" />
						<button type="button" class="btn btn-primary" id="${result.data[i]._id}" name = ${result.data[i].name} price = ${result.data[i].price} hash = ${result.data[i].imageHash}  onclick = "submitBid(this)" >Submit Bid</button>
					</div>
					<br/><br/>
					<hr/>`
			  $("#displayNFT").append(card)
			//   document.getElementById("displayNFT").appendChild(card)
			}
		},
        error: (error) => {
            console.log("error : ", error);
        }
    });


	// try{
	// 	const res = await fetch("http://localhost:3000/student/");
	// 	console.log("res : ",res);
	// 	if(!res.ok){
	// 		throw Error(res.statusText)
	// 	}
	// 	const data = await res.json()
	// 	console.log("data : ",data)
	// }
	// catch(error){
	// 	console.log("error : ", error)
	//  }
	});

const mintToken = async ( to_address , tokenHash , price ) => {
    try{
        console.log("tokenHash : ", tokenHash.IpfsHash)
		console.log("to_address:", to_address);
		const estimatedGas = await contract.methods.mint(to_address , tokenHash.IpfsHash, price).estimateGas({ from : accounts[0] });
		console.log("estimatedGas : ", estimatedGas)
		console.log("hi")
		const uri = await contract.methods.mint( to_address , tokenHash.IpfsHash, price ).send({ from: accounts[0] , gas: estimatedGas });
		// document.getElementById("name").innerHTML = mintedtokens;   
		console.log("uri : ", uri);
        alert("token minted  ..!")
	}
	catch (error) {
		console.log("error : ", error);
	}
}

const getPrice = async(tokenHash) => {
	try{
		const estimatedGas = await contract.methods.getPrice(tokenHash.IpfsHash).estimateGas({ from : accounts[0] });
		const price = await contract.methods.getPrice(tokenHash.IpfsHash).call({ from: accounts[0] , gas: estimatedGas });
		return price;
	}
	catch(error){
		console.log("error:", error)
	}
} 


const ownerOf = async(ele) => {
	try{
		let _hash = $(ele).attr("hash")
		const estimatedGas = await contract.methods.ownerOf(_hash).estimateGas({ from : accounts[0] });
		const owner = await contract.methods.ownerOf(_hash).call({ from: accounts[0] , gas: estimatedGas });
		console.log("owner : ", owner)
		return owner;
	}
	catch(error){
		console.log("error:", error)
	}
} 


const submitBid = async (ele) =>{
	let _id = await $(ele).attr("id")
	let _hash = $(ele).attr("hash")
	let input_id = "input_" + _id
	console.log("input_id : ", input_id)
	let bidPrice = await document.getElementById(input_id).value;
	// console.log("bidValue : ", bidValue)

	console.log("bid value : " , bidPrice)

	const estimatedGas = await contract.methods.submitBid(_hash ).estimateGas({ from : accounts[0] , value : bidPrice*(10**18) });
	const submition =	await contract.methods.submitBid(_hash ).send({ from: accounts[0] , value : bidPrice*(10**18), gas: estimatedGas });
	console.log("submition : ", submition)
	alert("Bid Submitted ..!")
	// console.log("Apply Bid Element:", ele);
}


$('#upload_img_button').on('click', async (e) => {
    e.preventDefault();

    let files = await $('#myImage')[0].files[0];
	let name = await $('#name_for_nft')[0].value
	let price = await $('#price')[0].value
    console.log("button clicked :" , price)
    
    var fd = await new FormData();
    fd.append("myImage" ,files )
	fd.append("name_for_nft",name)
	fd.append("price", price)
    console.log("fd :", fd );
    
    $.ajax({
        url: 'student/',
        method: 'POST',
        data: fd,
        processData : false ,
        contentType : false,
        success: (result) => {
            console.log("result:", result)
            console.log("result.data : ",result.hash)
			
            mintToken(accounts[0] , result.hash, price)
			// document.getElementById("displayPrice").innerHTML = price ;
			// document.getElementById("hash").innerHTML = result.hash.IpfsHash ;
			$("#img").attr("src","https://gateway.pinata.cloud/ipfs/" + String(result.hash.IpfsHash));
			
		},
        error: (error) => {
            console.log("error : ", error);
        }
    });
});




const buyNFT = async ( ele ) =>{
	try{
		console.log("ele:",ele)
		let _id=$(ele).attr("id")
		let _hash = $(ele).attr("hash")
		let _price = $(ele).attr("price")
		console.log("id :", _id)
		console.log("hash : ", _hash);
		console.log("price : ", _price);
		// const tokenHash = await document.getElementById("hash").innerHTML;
        // console.log("tokenHash : ", tokenHash)
		// const price = await document.getElementById("displayPrice").innerHTML;
		// console.log("price : ", price)
		console.log("type : ", typeof(_price))
		const price1 = await parseInt(_price);
		// console.log(typeof(price1))
		const estimatedGas = await contract.methods.buy(_hash).estimateGas({ from : accounts[1] , to : accounts[0] , value : price1*(10**18)});
		console.log("estimatedGas : ", estimatedGas)
		console.log("hi")
		await contract.methods.buy(_hash).send({ from: accounts[1]  , to : accounts[0] ,value : price1*(10**18) , gas: estimatedGas , });
		// document.getElementById("name").innerHTML = mintedtokens;   
		alert("Transaction Successfull ..!")
	}
	catch (error) {
		console.log("error : ", error);
	}
}


const getTokenURI = async () =>{
	try{
		// const to_address = accounts[0]
		const token_id = await document.getElementById("id_for_uri").value;
		console.log("token_id:", token_id);
		const estimatedGas = await contract.methods.tokenURI(token_id).estimateGas({ from : accounts[0] });
		console.log("estimatedGas : ", estimatedGas)
		console.log("hi")
		const uri = await contract.methods.tokenURI(token_id).call({ from : accounts[0], gas: estimatedGas });
		
		console.log("uri : ", uri);
        document.getElementById("url").setAttribute("href" , uri);   
        // document.getElementById("tokenURI").innerHTML = uri;
        alert("erc721Token URI fetched  ..!")
	}
	catch (error) {
		console.log("error : ", error);
	}
}

const symbol = async () => {
	try {
		const symbol = await contract.methods.symbol().call({ from: accounts[0] });
		document.getElementById("symbol").innerHTML = symbol;
	}
	catch (error) {
		console.log("error : ", error);
	}
}
