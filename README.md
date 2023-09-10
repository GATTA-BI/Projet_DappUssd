Pour travailler avec ce projet, commencer par:    
                                                                                                                                                                                                                                                
1-) Les dépendance :
    -Cloner le projet ;                                                                                                
    - Ouvrer dans VS Code et installer: npm i -S ethers@5.7.2 ;                                                        
    - npm install web3-provider ;                                                                                                                                                                                                                

2-) Backend :
    -Déployer sur IDE Remix, le smart contract suivant :
 
 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract uvciCoin is ERC20{
    constructor() ERC20("UvciCoin", "FCFA") {
        _mint(msg.sender, 1000 * 10 **18);
    }
}


-Copier son ABI et ajouter dans le fichier erc20abi.js du projet ;
                                                                                                                                                                                                                                                
3-) Frontend :
    - RAS: car, tout est déjà codé en React.Js dans ce projet ;
                                                                                                                                                                                                                                                        
4-) Test :
    - Taper : npm start ;                                                                                                                                                                                                                                                                                                            
 NB: Ecrivez-moi, si jamais vous rencontrez des erreurs. merci!
