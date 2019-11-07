function myFunction() {
  GmailApp.sendEmail('youemailhere@email.com', 'test email', 'Hello World')
}

function makeDraft(){
  var file = DriveApp.getFileById('id here');
  GmailApp.createDraft('ix.procopios@flatironschool.com', 'Test PDF', 'Check out the attachment',{
    attachments: [file.getAs(MimeType.PDF)],
    name:'My Doc as PDF'
  });
 
}