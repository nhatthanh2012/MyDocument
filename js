1. submit()

	$(document).on('click', '#btn-loginUser', function () {
		let fm = document.getElementById("fm");
		fm.method = "post";
		fm.action = "{{ route(LOGIN_USER) }}"
		fm.submit();
	});
2. ajax
	// insert dữ liệu
        $(document).on('click', '#btn-insert', function(){
        var hoten = $("#hoten").val();
        var sophone = $("#sophone").val();
        var diachi = $("#diachi").val();
        var email = $("#email").val();
        var ghichu = $("#ghichu").val(); 

        if (hoten == "" || sophone == "" || diachi == "" || email == "" || ghichu == "") {
            alert('Không được bỏ trống những trường này !');
        } else {
            $.ajax({
                type: "POST",
                url: "{{ route('addCustomer') }}",                
                data: {
                    _token: $('input[name=_token]').val(),
                    hoten: hoten,
                    sophone : sophone,
                    diachi: diachi,
                    email : email,
                    ghichu: ghichu                    
                }, 
                dataType:"json",               
                success: function (response) {                    
                    alert('Insert thành công');
                    $("#insertForm")[0].reset();
                    fetch_data();                    
                },
                error: function(data){

                }
            });
        } 

3. load more data without reload

	var nextPenSlugs = [2, 3, 4, 5, 6, 7, 8, 9, 10];
        function getPenPath() {
            slug = nextPenSlugs[ this.loadCount ];
            if (slug <= 10) {
                return '?page=' + slug;
            }
        }

        //-------------------------------------//
        // init Infinte Scroll
        $('.container').infiniteScroll({
            path: getPenPath,
            append: '.post',  // them class post vào data muốn load thêm
            scrollThreshold: 0.2 * $(document).height(),
            status: '.page-load-status', // message
            history: false
        });
		
4. checkbox
$(function () {
    function getCheckbox() {
        var check = $.makeArray($switch).every(function (elm) {
            return $(elm).find('input[type="checkbox"]:checked').val() === '2';
        });
        if (check) {
            $('input[name="SpecificOpening"]').val(8);
            $('.mynumber-confirm').find('.tr-mynumber').show();
        } else {
            $('input[name="SpecificOpening"]').val(8);
            $('.mynumber-confirm').find('.tr-mynumber').hide();
        }
       
    }

    if (!$('#result1, #result2').length) return;
    var $switch = $('.checkbox_switch');
    $switch.find('input[type="checkbox"]').on('change', function () {
        getCheckbox();
    });
    getCheckbox();
});
