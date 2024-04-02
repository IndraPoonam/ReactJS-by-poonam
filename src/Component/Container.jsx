import calender from '../icons/calendar_2020q4_2x.png'
import keep from '../icons/keep_2020q4v3_2x.png'
import task from '../icons/tasks2_2x.png'
import contact from '../icons/contacts_2x.png'
import addblack from '../icons/add_black_24dp.svg'
import chevron from '../icons/chevron_right_black_24dp.svg'
function Container (){
    return(
        <section class="app-container" >

        <div class="app-group">
      
          <div class="app-item">
            <button class="btn">
              <img src={calender} alt="Calendar" class="btn-icon btn-icon-sm"/>
            </button>
          </div>
      
          <div class="app-item">
            <button class="btn">
              <img src={keep} alt="Keep" class="btn-icon btn-icon-sm"/>
            </button>
          </div>
      
          <div class="app-item">
            <button class="btn">
              <img src={task} alt="Tasks" class="btn-icon btn-icon-sm"/>
            </button>
          </div>
      
          <div class="app-item">
            <button class="btn">
              <img src={contact} alt="Contacts" class="btn-icon btn-icon-sm"/>
            </button>
          </div>
      
          <div class="btn btn-nofill" >
            <div class="hrt-rule btn-icon-sm"></div>
          </div>
      
          <div class="app-item">
            <button class="btn">
              <img src={addblack} alt="" class="btn-icon btn-icon-sm btn-icon-disabled"/>
            </button>
          </div>
      
        </div>
      
        
        <button class="btn">
          <img src={chevron} alt="" class="btn-icon btn-icon-sm btn-icon-alt"/>
        </button>
      
      </section>
    )
};
export default Container;