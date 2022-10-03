// owl_corusel js start
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
})
// owl_corusel js end


let banner = $('#banner'),
    info = $('#info'),
    teachers = $('#teachers'),
    contact = $('#contact'),
    teacherMore = $('#teacherMore'),
    item01Btn = $('#item01 .item_btn'),
    item02Btn = $('#item02 .item_btn'),
    item03Btn = $('#item03 .item_btn'),
    item04Btn = $('#item04 .item_btn'),
    item05Btn = $('#item05 .item_btn'),
    item06Btn = $('#item06 .item_btn'),
    item07Btn = $('#item07 .item_btn'),
    item08Btn = $('#item08 .item_btn'),
    item09Btn = $('#item09 .item_btn'),
    item10Btn = $('#item10 .item_btn'),
    teacherInfo01 =$('#teacherMore .teacher01'),
    teacherInfo02 =$('#teacherMore .teacher02'),
    teacherInfo03 =$('#teacherMore .teacher03'),
    teacherInfo04 =$('#teacherMore .teacher04'),
    teacherInfo05 =$('#teacherMore .teacher05'),
    teacherInfo06 =$('#teacherMore .teacher06'),
    teacherInfo07 =$('#teacherMore .teacher07'),
    teacherInfo08 =$('#teacherMore .teacher08'),
    teacherInfo09 =$('#teacherMore .teacher09'),
    teacherInfo10 =$('#teacherMore .teacher10')


    headerNavbarBtn =  $('#header #headerBtn')
    headerInfoBtn =  $('#header #infoBtn')
    headerTeacherBtn =  $('#header #teacherBtn')
    headerContractBtn =  $('#header #contactBtn')


    //  teachers js start

    // for slide01
    item01Btn.on('click', function () {
        banner.css('display','none')
        info.css('display','none')
        teachers.css('display','none')
        contact.css('display','none')
        teacherMore.css('display','block')
        teacherInfo01.css('display','block')
    })
    // for slide02
    item02Btn.on('click', function () {
        banner.css('display','none')
        info.css('display','none')
        teachers.css('display','none')
        contact.css('display','none')
        teacherMore.css('display','block')
        teacherInfo02.css('display','block')
    })
    // for slide03
    item03Btn.on('click', function () {
        banner.css('display','none')
        info.css('display','none')
        teachers.css('display','none')
        contact.css('display','none')
        teacherMore.css('display','block')
        teacherInfo03.css('display','block')
    })
    // for slide04
    item04Btn.on('click', function () {
        banner.css('display','none')
        info.css('display','none')
        teachers.css('display','none')
        contact.css('display','none')
        teacherMore.css('display','block')
        teacherInfo04.css('display','block')
    })
    // for slide05
    item05Btn.on('click', function () {
        banner.css('display','none')
        info.css('display','none')
        teachers.css('display','none')
        contact.css('display','none')
        teacherMore.css('display','block')
        teacherInfo05.css('display','block')
    })
    // for slide06
    item06Btn.on('click', function () {
        banner.css('display','none')
        info.css('display','none')
        teachers.css('display','none')
        contact.css('display','none')
        teacherMore.css('display','block')
        teacherInfo06.css('display','block')
    })
    // for slide07
    item07Btn.on('click', function () {
        banner.css('display','none')
        info.css('display','none')
        teachers.css('display','none')
        contact.css('display','none')
        teacherMore.css('display','block')
        teacherInfo07.css('display','block')
    })
    // for slide08
    item08Btn.on('click', function () {
        banner.css('display','none')
        info.css('display','none')
        teachers.css('display','none')
        contact.css('display','none')
        teacherMore.css('display','block')
        teacherInfo08.css('display','block')
    })
    // for slide09
    item09Btn.on('click', function () {
        banner.css('display','none')
        info.css('display','none')
        teachers.css('display','none')
        contact.css('display','none')
        teacherMore.css('display','block')
        teacherInfo09.css('display','block')
    })
    // for slide10
    item10Btn.on('click', function () {
        banner.css('display','none')
        info.css('display','none')
        teachers.css('display','none')
        contact.css('display','none')
        teacherMore.css('display','block')
        teacherInfo10.css('display','block')
    })
    //  teachers js end

    // header navbar js start
    headerNavbarBtn.on('click', function () {
        banner.css('display','block')
        info.css('display','block')
        teachers.css('display','block')
        contact.css('display','block')
        teacherMore.css('display','none')
        teacherInfo01.css('display','none')
        teacherInfo02.css('display','none')
        teacherInfo03.css('display','none')
        teacherInfo04.css('display','none')
        teacherInfo05.css('display','none')
        teacherInfo06.css('display','none')
        teacherInfo07.css('display','none')
        teacherInfo08.css('display','none')
        teacherInfo09.css('display','none')
        teacherInfo10.css('display','none')
    })


    let openMenu01 = $('.header .mobile_menu'),
        openMenu01Active = $('.header .mobile_menu.active .mobile_navbar')
        openBtn = $('.header .mobileBtn'),
        openLeftBtn = $('.header .mobile_menu .opened_menu'),
        closedLeftBtn = $('.header .mobile_menu .closed_menu'),
        mobileNavbarToTop = $('.header .mobile_menu .navbarClosed')
    
    openBtn.on('click', function () {
        openMenu01.addClass('active')
        openLeftBtn.css('display', 'none')
        closedLeftBtn.css('display', 'flex')
    })
    closedLeftBtn.on('click', function () {
        openMenu01.removeClass('active')
        openLeftBtn.css('display', 'flex')
        closedLeftBtn.css('display', 'none')
    })
    openLeftBtn.on('click', function () {
        openMenu01.addClass('active')
        openLeftBtn.css('display', 'none')
        closedLeftBtn.css('display', 'flex')
    })
    mobileNavbarToTop.on('click', function() {
        openMenu01.removeClass('active')
        openLeftBtn.css('display', 'flex')
        closedLeftBtn.css('display', 'none')
    })
    // header navbar js end
    
    const scrolBtn = $('.scrollToTop-btn');
    window.addEventListener('scroll', () =>{
        scrolBtn.toggleClass('active', window.scrollY > 500)
    })
    scrolBtn.on('click', ()=> {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    })

