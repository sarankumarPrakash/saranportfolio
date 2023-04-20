import React, { Component } from 'react';
export default class ContactUs extends Component {
   handleDownload=()=>{
    const link = document.createElement('a');
    link.href = 'images/saran_resume.pdf';
    link.download = 'saranResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
   
  }
  render() {
    let resumeData = this.props.resumeData;
    
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                {/* <h4>Linked in :
                  {resumeData.linkedinId} 
                </h4> */}
              </div>
            </aside>
          </div>
          <div style={{marginLeft:'12%'}} >
            <div style={{width:"100%",display:'flex'}}>
            <span> <input type="text" placeholder='First Name' /></span>
            <span> <input type="text" placeholder='Last Name' /></span>
            </div>
            <div style={{width:"100%",display:'flex'}}>
            <span> <input type="email" placeholder='Email' /></span>
            <span> <input type="text" placeholder='phone Number' inputmode="numeric" maxlength="10"/></span>
            </div>
            <div style={{width:"100%",display:'flex'}}>
            <span> <textarea rows={5} cols={78} placeholder='Write Something.....'></textarea></span>
            </div>
            <div style={{width:"100%",display:'flex'}}>
            <span><button class="btn">Send</button></span>
            <span style={{marginLeft:'15%'}} onClick={this.handleDownload}><button >Download Resume</button></span> 
            </div>

          </div>
        </section>
        );
  }
}
