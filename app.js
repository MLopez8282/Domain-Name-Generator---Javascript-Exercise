let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function mixItUp(array1, array2, array3) {

    for (let i = 0; i < array1.length; i++) {

        for (let j = 0; j < array2.length; j++) {

            for (let k = 0; k < array3.length; k++) {
                let domain = array1[i] + array2[j] + array3[k] + '.com'

                console.log(domain)
            }
        }
    }
};
mixItUp(pronoun, adj, noun);


 