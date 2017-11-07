
var sendGetOnDataSelect = function(code, year) {
	$.ajax({
		url: "/data",
		type: "GET",
		contentType: "application/json",
		data: {"code": code, "year": year},
		dataType: "json",
		success: function(response, status, xhr) {
			//TODO: display district boundary
			console.log("Enabling GerrymanderingMeasure drop down menu...");
			$("#gerrymanderingMeasure").prop({
				disabled: false
			});
		},
		error: function(xhr, textStatus, errorThrown){
			console.log(textStatus
				+ ": Cannot enable GerrymanderingMeasure drop down menu"
				+ "\nCan be caused by empty response");
			$("#gerrymanderingMeasure").prop({
				disabled: true
			});
		}
	});
}

$(document).ready(function() {

	const dataSelectionOrigHTML = $('#dataSelection').html();

	// send get on state selection
	$('#stateSelection').change(function(){
		var code = $(this).val();
		var options = "";
		// BASE CASE: zoom back to continental US on select no State
		if (code === "") {
			map1.setView([36.4051421,-95.5136459], 3.91);
			// clear the options
			$('#dataSelection').html(dataSelectionOrigHTML);
			$("#dataSelection").prop({
				disabled: true
			});
			// $("#dataSelection").prop({
			// 	disabled: true
			// });
			return;
		}
		$.ajax({
			url: "/state",
			type: "GET",
			contentType: "application/json",
			data: {"code": code},
			dataType: "json",
			success: function(response, status, xhr) {
				// zoom to state
				map1.fitBounds($.grep(allStates.getLayers(), function(state){
					return state.feature.properties.STUSPS == code;
				})[0].getBounds());

				// populate year options to data drop down
				$.each(response, function(index, v){
					options+="<option value" + "=" + v + ">" + v + "</option>"
				});
				$('#dataSelection').html(options);
				console.log("Enabling Data drop down menu...");
				$("#dataSelection").prop({
					disabled: false
				});

				//TODO: send get request for default year (or selected year)
				var y = $("#dataSelection").val();
				sendGetOnDataSelect(code, y);

			},
			error: function(xhr,status,error) {
				// disallow selecting "Data" option if response is empty
				$("#dataSelection").prop({
					disabled: true
				});
			}
		});
	});

	// send get on data selection
	$('#dataSelection').change(function(){
		sendGetOnDataSelect($("#stateSelection").val(), $("#dataSelection").val());
	});

	// send get on measure/test selection
	$('#gerrymanderingMeasure').change(function(){
		var c = $("#stateSelection").val();
		var y = $("#dataSelection").val();
		var m = $(this).val();
		$.ajax({
			url: "/measure/"+m,
			type: "GET",
			contentType: "application/json",
			data: {"code": c, "year": y},
			dataType: "json",
			success: function(response, status, xhr) {
				//TODO: display measure result

				//TEST
				// $('.info').html(m);
			},
			error: function(xhr, textStatus, errorThrown){
				console.log(textStatus + "; errorThrown: " + errorThrown);
			}
		});
	});


});