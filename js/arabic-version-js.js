//arabic script pages
//active side nav link
$(document).ready(function () {
	$(function () {

		var url = window.location.pathname,
			urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");
		$('.production-side-menu a').each(function () {
			if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
				$(this).addClass('current').addClass('current-mobile');
			}
		});

		if ($(".hellonow").hasClass("homenow")) {
			$(".production-side-menu li:nth-of-type(2) a, .production-side-menu li:nth-of-type(3) a, .production-side-menu li:nth-of-type(4) a, .production-side-menu li:nth-of-type(5) a, .production-side-menu li:nth-of-type(6) a, .production-side-menu li:nth-of-type(7) a").removeClass('current').removeClass('current-mobile');
		}

	});
});
//show and hide password button script
$(document).ready(function () {

	$('.button-psswd').on('click', function () {

		if ($('.input-psswd').attr('psswd-shown') == 'false') {

			$('.input-psswd').removeAttr('type');
			$('.input-psswd').attr('type', 'text');

			$('.input-psswd').removeAttr('psswd-shown');
			$('.input-psswd').attr('psswd-shown', 'true');

			$('.button-psswd').html('<i class="fas fa-eye-slash"></i>');

		} else {

			$('.input-psswd').removeAttr('type');
			$('.input-psswd').attr('type', 'password');

			$('.input-psswd').removeAttr('psswd-shown');
			$('.input-psswd').attr('psswd-shown', 'false');

			$('.button-psswd').html('<i class="fas fa-eye"></i>');

		}

	});

});


//*form empty validation script
var main = function () {
	$('#login-form').submit(function () {
		var companyCode = $('#company-code').val();

		if (companyCode === "") {
			$('.company-code-error').text('رجاء قم بملئ هذا الحقل');
			return false;
		} else {
			return true;
			$('.company-code-error').text('رجاء قم بملئ هذا الحقل').hide();
		}
	});
	$('#login-form').submit(function () {
		var userName = $('#user-name').val();

		if (userName === "") {
			$('.user-name-error').text('رجاء قم بملئ هذا الحقل');
			return false;
		} else {
			return true;
			$('.user-name-error').text('رجاء قم بملئ هذا الحقل').hide();
		}
	});
	$('#login-form').submit(function () {
		var passwordInput = $('#password-input').val();

		if (passwordInput === "") {
			$('.password-error').text('رجاء قم بملئ هذا الحقل');
			return false;
		} else {
			return true;
			$('.password-error').text('رجاء قم بملئ هذا الحقل').hide();

		}
	});
}

$(document).ready(main);


//*select2 form script
$(document).ready(function () {
	$('select').select2();
});


//*data table script
$(document).ready(function () {
	$('.system-data-table').DataTable({
		responsive: true,
		columnDefs: [{
			orderable: false,
			className: 'select-checkbox',
			targets: 0
		}],
		select: {
			style: 'multi',
			selector: 'td:first-child'
		},
		order: [
			[1, 'asc']
		]
	});
});


//*date picker script
$(".date-fetcher").flatpickr({
	altInput: true,
	altFormat: "F j, Y",
	dateFormat: "Y-m-d",
});


//*veiw modal script       		
$(document).ready(function () {
	var show_btn = $('.show-modal-data');

	show_btn.click(function () {
		$(".veiw-detials-modal").modal('show');
	})
});


//*delete modal script       		
$(document).ready(function () {
	var delete_btn = $('.delete-btn');

	delete_btn.click(function () {
		$(".delet-warning-modal").modal('show');
	})
});


//-item-directory-image-upload-image-script-start
//get-file-images
function GetFileSize() {
	console.log('changed');
	var fi = document.getElementById('logo-btn');


	if (fi.files.length > 0) {

		for (var i = 0; i <= fi.files.length - 1; i++) {

			var fsize = fi.files.item(i).size;

			if (fsize > 2097152) {

				alert('image size > 2M');
				$('#logo_preview').empty();
				$('#logo-btn').val('');
			}

		}
	}
}


//image-preview
function logo_preview(input) {

	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#logo_preview').attr('src', e.target.result);
			$('#logo_preview').attr('width', 150);
		}

		reader.readAsDataURL(input.files[0]);
	}
}


$("#logo-btn").change(function () {
	logo_preview(this);
	$("#item-directory-upload-label-for-image").css("display", "none");
});
//-item-directory-image-upload-image-script-end


//tree-veiw-script-start
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
	toggler[i].addEventListener("click", function () {
		this.parentElement.querySelector(".nested").classList.toggle("active-tree-component");
		this.classList.toggle("list-slid-down");
	});
}