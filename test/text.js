class HelprTest_Text {
    test_length() {
        let testStrings = [
            { string: "test", length: 4, success: true },
            { string: "'*Ü&?/=$U)ERTJHDasf a874oiafkbsjzry t6cfgm", length: 45, success: false }
        ];

        testStrings.forEach(function(item,index){
            if( ((new Helpr).text(item.string).length() !== item.length) === item.success ){
                console.debug("test_length: Invalid length for Teststring " + index);
            }
        });
    }

    test_words() {
        let testStrings = [
            { string: "Word", length: 1, success: true },
            { string: "This is a short text.", length: 5, success: true },
            { string: "This is another a little bit longer short text.", length: 9, success: true }
        ];

        testStrings.forEach(function(item,index){
            if( ((new Helpr).text(item.string).words() !== item.length) === item.success ){
                console.debug("test_words: Invalid length for Teststring " + index);
            }
        });
    }

    test_lines() {
        let testStrings = [
            { string: "Word", length: 1, success: true },
            { string: "This is a\nshort text.", length: 2, success: true },
            { string: "This is\nanother a little\nbit longer\nshort text.", length: 4, success: true }
        ];

        testStrings.forEach(function(item,index){
            if( ((new Helpr).text(item.string).lines() !== item.length) === item.success ){
                console.debug("test_lines: Invalid length for Teststring " + index);
            }
        });
    }
}