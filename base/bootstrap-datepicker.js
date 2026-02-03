//== Class definition

var BootstrapDatepicker = (function () {
	//== Private functions
	var demos = function () {
		/*
			Options for datepicker
				1. orientation : string
					Possible values for orientation :
						1. "bottom left",
						2. "bottom right",
						3. "top left",
						4. "top right"
				2. todayHighlight : boolean
					Possible Values for todayHighlight :
						1. true,
						2. false
				3. templates : Object,
				4. todayBtn: string
					Possible Values for todayBtn
						1. "linked"
				5. clearBtn: boolean
					Possible Values for clearBtn :
						1. true,
						2. false
				For more reference :
					see bootstrap datepicker
			*/

		/*
			Example providing all options :
				$('#m_datepicker_3_modal').datepicker({
					todayBtn: "linked",
					clearBtn: true,
					todayHighlight: true,
					templates: {
						leftArrow: '<i class="la la-angle-left"></i>',
						rightArrow: '<i class="la la-angle-right"></i>'
					}
				});
			*/
		$("#yearOfEstablishment").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1970, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			), // today's date - 1 year.
		});
		$("#dob").datepicker({
			todayHighlight: false,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear() - 14,
				new Date().getMonth(),
				new Date().getDate()
			)
		});

		$("#applicantDOB").datepicker({
			todayHighlight: false,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear() - 14,
				new Date().getMonth(),
				new Date().getDate()
			)
		});
		// for Applicant :begin
		$("#fromDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1970, 1, 1),
			// endDate: new Date(
			//   new Date().getFullYear(),
			//   new Date().getMonth(),
			//   new Date().getDate()
			// ), // today's date - 1 year.
		});

		$("#toDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1970, 1, 1),
			// endDate: new Date(
			//   new Date().getFullYear(),
			//   new Date().getMonth(),
			//   new Date().getDate()
			// ), // today's date - 1 year.
		});

		// End
		$("#dobCandidate").datepicker({
			todayHighlight: false,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear() - 100,
				new Date().getMonth(),
				new Date().getDate()
			),
			endDate: new Date(
				new Date().getFullYear() - 15,
				new Date().getMonth(),
				new Date().getDate()
			)
		});

		$("#reassessmentcal").datepicker({
			todayHighlight: false,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear() - 100,
				new Date().getMonth(),
				new Date().getDate()
			),
		});
		$("#canregfilter").datepicker({
			todayHighlight: false,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear() - 100,
				new Date().getMonth(),
				new Date().getDate()
			),
		});
		// $("#canregEndfilter").datepicker({
		// 	todayHighlight: false,
		$("#inspectionDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear() - 100,
				new Date().getMonth(),
				new Date().getDate()
			),
		});
		// $("#DOB").datepicker({
		// 		new Date().getFullYear(),
		// 		new Date().getMonth(),
		// 		new Date().getDate() + 1
		// 	)
		// });
		$("#cmInspectionDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear() - 1,
				new Date().getMonth(),
				new Date().getDate()
			), // today's date - 1 year.
		});
		// $("#effectiveDateJobRole").datepicker({
		// 	startDate: new Date(
		// 		new Date().getFullYear(),
		// 		new Date().getMonth(),
		// 		new Date().getDate() + 1
		// 	)
		// });
		$("#inspectionDatePMKK").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1),
			// endDate: new Date(
			//   new Date().getFullYear()-1,
			//   new Date().getMonth(),
			//   new Date().getDate()
			// ), // today's date - 1 year.
		});
		$("#normalDate #normalDate1").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear() - 1,
				new Date().getMonth(),
				new Date().getDate()
			), // today's date - 1 year.
		});

		$("#effectiveDateDA").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
		});
		$("#transactionFromDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#transactionToDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#submittedTpStartDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#submittedTpEndtDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#inspectionDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate() + 1
			)
        });
        $("#inspectionDateRejected").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate() + 1
			)
		});
		$("#cmInspectionDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate() + 1
			)
		});
		$("#inspectionDatePMKK").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate() + 1
			)
		});
		$("#reassessmentcal").datepicker({
			todayHighlight: false,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear() - 100,
				new Date().getMonth(),
				new Date().getDate()
			),
		});
		$("#canregfilter").datepicker({
			todayHighlight: false,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear() - 100,
				new Date().getMonth(),
				new Date().getDate()
			),
		});
		$("#canregEndfilter").datepicker({
			todayHighlight: false,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear() - 100,
				new Date().getMonth(),
				new Date().getDate()
			),
		});
		$("#DOB").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear() - 1,
				new Date().getMonth(),
				new Date().getDate()
			), // today's date - 1 year.
		});
		$("#effectiveDateJobRole").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1),
			// endDate: new Date(
			//   new Date().getFullYear()-1,
			//   new Date().getMonth(),
			//   new Date().getDate()
			// ), // today's date - 1 year.
		});
		$("#normalDate #normalDate1").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear() - 1,
				new Date().getMonth(),
				new Date().getDate()
			), // today's date - 1 year.
		});

		$("#effectiveDateDA").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
		});
		$("#transactionFromDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#transactionToDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		
		$("#inspectionDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate() + 1
			)
		});
		$("#inspectionDatePMKK").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate() + 1
			)
		});
		$("#refundFromDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#refundToDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#submittedTcStartDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#ipDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate() + 1
			)
		});
		$("#inspectionDatePMKK").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate() + 1
			)
		});
		$("#a_DateIA").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
		});
		
		$("#refundFromDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#refundToDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#submittedTcStartDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#submittedTcEndtDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#submittedTcSchemeStartDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
		});
		$("#effectiveDateAnotherDA").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
		});
		$("#effectiveDateAnotherDOB").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
		});
		$("#submittedTcSchemeEndtDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
		})
		$("#effectiveDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(2000, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});

		$("#submittedTcEndtDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#submittedTcSchemeStartDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
		});
		$("#effectiveDateAnotherDA").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
		});
		$("#effectiveDateAnotherDOB").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
		});
		$("#submittedTcSchemeEndtDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)

		});

		$("#effectiveDateAnother").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1)
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#futureDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(),
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#fullDate, #fullDate1, #fullDate2, #fullDate2, #fullDate3, #fullDate4, #fullDate5").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#totApplicantStartDate, #totApplicantEndDate").datepicker({
			startDate: "+7d",
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#startDate, .startDate, #endDate, .endDate, #date").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(),
			// endDate: new Date(),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});

		$("#futureDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(),
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#fullDate, #fullDate1, #fullDate2, #fullDate2, #fullDate3, #fullDate4, #fullDate5").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#totApplicantStartDate, #totApplicantEndDate").datepicker({
			startDate: "+7d",
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#startDate, .startDate, #endDate, .endDate, #date").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(),
			// endDate: new Date(),


			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#startDates, #endDates").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(),
			// endDate: new Date(),


			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#candidateRegistrationStartDate").datepicker({
			// startDate: "+7d",
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate() - 1
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#candidateRegistrationendDate").datepicker({
			// startDate: "+7d",
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(2040, 1, 1),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});

		$("#iaDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});

		$("#iaAssignedDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#caafDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});

		// $("#traAndAssCertificateIssueDate").datepicker({
		$("#iaAssignedDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#cmi_date").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#caafDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#iaAssignedDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#cmi_date").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#caafDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#iaDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});

		$("#iaAssignedDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#caafDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});

		$("#traAndAssCertificateIssueDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});

		$("#traAndAssCertificateValidTillDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear() + 1,
				new Date().getMonth() + 1,
				new Date().getDate() + 1
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});
		$("#certificationIssueDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});

		$("#traAndAssCertificateValidTillDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			endDate: new Date(
				new Date().getFullYear() + 1,
				new Date().getMonth() + 1,
				new Date().getDate() + 1
			),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		});

		$("#schemeDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			startDate: new Date(1900, 1, 1),
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			}
		})
		$("#IAAssignDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(),
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#CIDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(),
			// endDate: new Date(
			//   new Date().getFullYear() + 1,
			//   new Date().getMonth() + 1,
			//   new Date().getDate()
			// ) // today's date + 1 year.
			// endDate: new Date() // Will disable all dates after today.
		});
		$("#scheduleCiDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(),

		});
		$("#startDateSSCPayment").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1),

		});

		$("#certificateValidTillDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1),

		});

		$("#endDateSSCPayment").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1900, 1, 1),

		});

		$("#endDateSSCPayment").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			starDate: new Date(1900, 1, 1),

		});

		$("#experienceStartDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1970, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			)
		});

		$("#experienceEndDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1970, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			)
		});

		$("#trainingStartDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1970, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			)
		});

		$("#trainingEndDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1970, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			)
		});

		$("#editStartDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1970, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			)
		});

		$("#editEndDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1970, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			)
		});

		$("#editTrainingStartDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1970, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			)
		});

		$("#editTrainingEndDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1970, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			)
		});

		$("#ojtStartDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1970, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			)
		});

		$("#ojtEndDate").datepicker({
			todayHighlight: true,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
			startDate: new Date(1970, 1, 1),
			endDate: new Date(
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate()
			)
		});

		$("#qpFilterTwo").datepicker({
            todayHighlight: false,
            format: "dd/mm/yyyy",
            orientation: "bottom left", 
            
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            startDate: new Date(
                new Date().getFullYear() - 100,
                new Date().getMonth(),
                new Date().getDate()
            ),
            endDate: new Date(
                new Date().getFullYear() - 15,
                new Date().getMonth(),
                new Date().getDate()
            )
        });
        $("#qpFilterOne").datepicker({
            todayHighlight: false,
			format: "dd/mm/yyyy",
			orientation: "bottom left",
			templates: {
				leftArrow: '<i class="la la-angle-left"></i>',
				rightArrow: '<i class="la la-angle-right"></i>'
			},
            startDate: new Date(
                new Date().getFullYear() - 100,
                new Date().getMonth(),
                new Date().getDate()
            ),
            endDate: new Date(
                new Date().getFullYear() - 15,
                new Date().getMonth(),
                new Date().getDate()
            )
        });



	};
	return {
		// public functions
		init: function () {
			demos();
		}
	};
})();
jQuery(document).ready(function () {
	BootstrapDatepicker.init();
});
