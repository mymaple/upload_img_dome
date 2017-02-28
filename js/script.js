	$(function(){
        $("img.lazy").lazyload({
            threshold :20
        });
    })  
	
	function toAddUploadImg(elem) {
		//获取文件列表对象
        var fileList = $(elem)[0].files;
        var upload_img_name = $(elem).prev();
        $.each(fileList, function(index, item) {
        	//创建文件流获取文件地址
	        var src = URL.createObjectURL(item);
	        
	        var itemli = 
	        '<li>'+
				'<div class="img_cell img_edit">'+
					'<img src="'+src+'" data-original="img/grey.gif" class="lazy" />'+
					'<div class="img_tools">'+
						'<div class="img_tools_item left"><input type="file" class="upload_img_type" accept="image/*" onchange="toUpdateUploadImg(this);"/><i class="iconfont icon-edit"></i></div>'+
						'<div class="img_tools_item right"><a onclick="toDeleteUploadImg(this);"><i class="iconfont icon-delete"></i></a></div>'+
					'</div>'+
				'</div>'+
			'</li>';
	        $(elem).closest("li").before(itemli);
        });
        var multiple = $(elem).attr("multiple");
        if('multiple' != multiple){
        	$(elem).closest("li").hide();
        }
	}
	
	function toUpdateUploadImg(elem) {
		//获取文件列表对象
        var fileList = $(elem)[0].files;
        //创建文件流获取文件地址
        var src = URL.createObjectURL(fileList[0]);
        $(elem).parent().parent().prev().attr("src",src);
	}
	
	function toDeleteUploadImg(elem) {
		$(elem).closest("li").next().show();
		$(elem).closest("li").remove();
	}