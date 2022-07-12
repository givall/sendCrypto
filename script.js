
        let accounts = [];


        function Send() {

            let EthVal = document.querySelector('#eth-value')
            let address = document.querySelector('#eth-address')
            let EthVal_Float = parseFloat(EthVal.value);
            let Eth_decimal = EthVal_Float * 10 ** 18;//1ETH=10**18wei
            let value1 = Eth_decimal.toString(16);
            ethereum
                .request({
                    method: 'eth_sendTransaction',
                    params: [
                        {
                            from: accounts[0],
                            to: address.value,
                            value: value1,
                            gasPrice: '0x09184e72a000',
                            gas: '0x2710',
                        },
                    ],
                })
                .then((txHash) => console.log(txHash))
                .catch((error) => console.error);
        }

        function Connect() {
            getAccount();
        }

        async function getAccount() {
            accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        }