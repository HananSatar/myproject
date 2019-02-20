// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Document</title>
// </head>
// <body>
//   <div class="header">
//     <div className="se"><p> تم أرسال طلبك بنجاح</p>
//      </div>
//     </div>
// </body>
// </html>

 import React, { Component } from 'react'
import Context from "../context"
export class ch extends Component { 
 render() {
    return (
       < Context.Consumer>
        <div className="header">
      <div className="se"><p> تم أرسال طلبك بنجاح</p>
       </div>
      </div>
      </ Context.Consumer>
    )
  }
}
export default ch