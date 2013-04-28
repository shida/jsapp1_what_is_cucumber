var jsAppSample = new Object()

jsAppSample.Controller = {
    main: function() {
        $(document).on('click', 'button.start', this.clickStartButton)
        $(document).on('change', 'select[name=q1]', this.chooseQ1)
        $(document).on('change', 'select[name=q2]', this.chooseQ2)
        this.loadDocument()
    },
    
    loadDocument: function() {
        $("#contents").html($('#step1Template').html())
    },
    
    clickStartButton: function() {
        $("#contents").html($('#step2Template').html())
    },
    
    chooseQ1: function() {
        jsAppSample.Controller.a1 = $('select[name=q1]').val()
        $("#contents").html($('#step3Template').html())
    },
    
    chooseQ2: function() {
        var answerArr = [['赤優し',
                          '青優し'],
                         ['赤意地悪',
                          '青意地悪']]
        jsAppSample.Controller.a2 = $('select[name=q2]').val()
        $("#contents").html($('#step4Template').html())
        $("#answer").html(answerArr[jsAppSample.Controller.a1][jsAppSample.Controller.a2])
    },
}

$(document).ready(function() {
    jsAppSample.Controller.main();
});