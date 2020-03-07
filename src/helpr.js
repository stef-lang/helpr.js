class Helpr {

    text( text ){
        return {
            _text: function(){
                let _text = "";
                if(text !== undefined && typeof text === "string"){
                    _text = text;
                }
                return _text;
            },

            length: function() {
                return this._text().length;
            },

            words: function() {
                return this._text().split(" ").length;
            },

            lines: function() {
                return this._text().split("\n").length;
            }
        };
    }

    form() {
        return {
            textarea: function(textAreaElement){
                return {
                    _calculateContentHeight: function( ta, scanAmount ) {
                        // found on Stackoverflow: https://stackoverflow.com/questions/1760629/how-to-get-number-of-rows-in-textarea-using-javascript/1761203#1761203
                        let origHeight = ta.style.height,
                            height = ta.offsetHeight,
                            scrollHeight = ta.scrollHeight,
                            overflow = ta.style.overflow;
                        /// only bother if the ta is bigger than content
                        if ( height >= scrollHeight ) {
                            /// check that our browser supports changing dimension
                            /// calculations mid-way through a function call...
                            ta.style.height = (height + scanAmount) + 'px';
                            /// because the scrollbar can cause calculation problems
                            ta.style.overflow = 'hidden';
                            /// by checking that scrollHeight has updated
                            if ( scrollHeight < ta.scrollHeight ) {
                                /// now try and scan the ta's height downwards
                                /// until scrollHeight becomes larger than height
                                while (ta.offsetHeight >= ta.scrollHeight) {
                                    ta.style.height = (height -= scanAmount)+'px';
                                }
                                /// be more specific to get the exact height
                                while (ta.offsetHeight < ta.scrollHeight) {
                                    ta.style.height = (height++)+'px';
                                }
                                /// reset the ta back to it's original height
                                ta.style.height = origHeight;
                                /// put the overflow back
                                ta.style.overflow = overflow;
                                return height;
                            }
                        } else {
                            return scrollHeight;
                        }
                    },

                    rowCount: function() {
                        let ta = textAreaElement,
                            style = (window.getComputedStyle) ?
                                window.getComputedStyle(ta) : ta.currentStyle,
                            // This will get the line-height only if it is set in the css,
                            // otherwise it's "normal"
                            taLineHeight = parseInt(style.lineHeight, 10);
                            if(style.lineHeight === "normal"){
                                taLineHeight = parseInt(parseInt(style.fontSize) * 1.2, 10);
                            }
                        // Get the scroll height of the textarea
                        let taHeight = this._calculateContentHeight(ta, taLineHeight);
                        // calculate the number of lines
                        return Math.ceil(taHeight / taLineHeight) - 1;
                    }
                }
            }
        }
    }

}