/**
 * Class for getting a CSSMatrix class from a transform style. It's wrapper for existing variants like WebKitCSSMatrix and MSCSSMatrix (IE10).
 * For others it's trying to parse out the matrix manually.
 *
 * @class CSSMatrix
 * @constructor transformObj The CSS transformation object
 *
 * @author Sebastian Ross SVTi
 */
;var CSSMatrix = (function(){

    function CSSMatrix(transformObj) {
        this.transformObj = transformObj;
        return this.init();
    }

    /**
    * Extracts the appropiate CSSMatrix object
    *
    * @method init
    * @return {Object} Returns object with Matrix object
    */
    CSSMatrix.prototype.init = function() {
        if (this.transformObj && this.transformObj !=='none' && this.transformObj.indexOf('matrix') > -1) {

            //check which native obj we can use
            if ('WebKitCSSMatrix' in window) { //webkit
                return new WebKitCSSMatrix(this.transformObj);
            }
            else if ('MSCSSMatrix' in window) { //IE10
                return new MSCSSMatrix(this.transformObj);
            }
            else { //pollyfill (Firefox and others)
                var i = this.transformObj.indexOf("(");

                if (i > -1) {
                    var s = this.transformObj.substr(i+1),
                        m = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];

                    if (m.length == 16) {
                        return {
                            a : m[0],
                            b : m[4],
                            c : m[1],
                            d : m[5],
                            e : m[2],
                            f : m[6],
                            m11 : m[0],
                            m12 : m[1],
                            m13 : m[2],
                            m14 : m[3],
                            m21 : m[4],
                            m22 : m[5],
                            m23 : m[6],
                            m24 : m[7],
                            m31 : m[8],
                            m32 : m[9],
                            m33 : m[10],
                            m34 : m[11],
                            m41 : m[12],
                            m42 : m[13],
                            m43 : m[14],
                            m44 : m[15],
                            matrix : m //store original match also
                        };
                    }

                }
                    
            }
            
        }

        return null;
        
    };

    return CSSMatrix;
})();
