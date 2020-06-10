
import React from 'react'


function T_S ({tac, index, toggletac}) {
    if (tac.length===1){
        return(
            <div  id='tac-flex' className={"tac" + (tac.val  ? 'open' : ' ')} key={index} onClick={() => toggletac(index)}>      
                <div className="tac-question">
                <div className='tac_section' >{tac.section}</div>
                    <div className='tac_heading'>
                        {tac.heading1}
                    </div>
                    <span></span>
                    <hr/>
           </div>

        </div>
        )
    }
   else if(tac.length===2){
	return (
        
         <div  id='tac-flex' className={"tac" + (tac.val  ? 'open' : ' ')} key={index} onClick={() => toggletac(index)}>      
                <div className="tac-question">
                <div className='tac_section' >{tac.section}</div>
                    <div className='tac_heading'>
                        {tac.heading1}
                    </div>
                    <div className='tac_heading'>
                        {tac.heading2}
                    </div>
                    <span></span>
                    <hr/>
           </div>

        </div>
        
    )}
  else  if(tac.length===3){
        return (
            
             <div  id='tac-flex' className={"tac" + (tac.val  ? 'open' : ' ')} key={index} onClick={() => toggletac(index)}>      
                    <div className="tac-question">
                    <div className='tac_section' >{tac.section}</div>
                        <div className='tac_heading'>
                            {tac.heading1}
                        </div>
                        <div className='tac_heading'>
                            {tac.heading2}
                        </div>
                        <div className='tac_heading'>
                            {tac.heading3}
                        </div>
                        <span></span>
                        <hr/>
               </div>
    
            </div>
            
        )}
        else  if(tac.length===4){
            return (
                
                 <div  id='tac-flex' className={"tac" + (tac.val  ? 'open' : ' ')} key={index} onClick={() => toggletac(index)}>      
                        <div className="tac-question">
                        <div className='tac_section' >{tac.section}</div>
                            <div className='tac_heading'>
                                {tac.heading1}
                            </div>
                            <div className='tac_heading'>
                                {tac.heading2}
                            </div>
                            <div className='tac_heading'>
                                {tac.heading3}
                            </div>
                            <div className='tac_heading'>
                                {tac.heading4}
                            </div>
                            <span></span>
                            <hr/>
                   </div>
        
                </div>
                
            )}
            else   if(tac.length==5){
                return (
                    
                     <div  id='tac-flex' className={"tac" + (tac.val  ? 'open' : ' ')} key={index} onClick={() => toggletac(index)}>      
                            <div className="tac-question">
                            <div className='tac_section' >{tac.section}</div>
                                <div className='tac_heading'>
                                    {tac.heading1}
                                </div>
                                <div className='tac_heading'>
                                    {tac.heading2}
                                </div>
                                <div className='tac_heading'>
                                    {tac.heading3}
                                </div>
                                <div className='tac_heading'>
                                    {tac.heading4}
                                </div>
                                <div className='tac_heading'>
                                    {tac.heading5}
                                </div>
                                <span></span>
                                <hr/>
                       </div>
            
                    </div>
                    
                )}
                else   if(tac.length==6){
                    return (
                        
                         <div  id='tac-flex' className={"tac" + (tac.val  ? 'open' : ' ')} key={index} onClick={() => toggletac(index)}>      
                                <div className="tac-question">
                                <div className='tac_section' >{tac.section}</div>
                                    <div className='tac_heading'>
                                        {tac.heading1}
                                    </div>
                                    <div className='tac_heading'>
                                        {tac.heading2}
                                    </div>
                                    <div className='tac_heading'>
                                        {tac.heading3}
                                    </div>
                                    <div className='tac_heading'>
                                        {tac.heading4}
                                    </div>
                                    <div className='tac_heading'>
                                        {tac.heading5}
                                    </div>
                                    <div className='tac_heading'>
                                        {tac.heading6}
                                    </div>
                                    <span></span>
                                    <hr/>
                           </div>
                
                        </div>
                        
                    )}
                    else{
                        return(
                            <div>Hello</div>
                        )
                    }
                
}

export default T_S