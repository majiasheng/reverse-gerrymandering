<%-- 
    Document   : manage
    Created on : Nov 20, 2017, 10:24:47 PM
    Author     : majiasheng
--%>

<%@include file="/WEB-INF/views/include/header.jsp" %>

<!--send home if user is empty or user is not admin-->
<c:if test="${empty user || not user.isAdmin()}">
    <c:redirect url="/"/>
</c:if>

<table>
    <tr>
        <th>user</th>
        <th>Can Save Result</th>
        <th>Can Delete Result</th>
        <th>Can Upload</th>
    </tr>
    <c:forEach var="normalUser" items="${normalUsers}">
        <!--TODO: list all normal users, and add option for admin to edit-->
        <tr>
            <td>${normalUser.username}</td>
            <!--TODO: check permissions based on user's rights-->
            <td><input type="checkbox" name="canSave"></td>
            <td><input type="checkbox" name="canDelete"></td>
            <td><input type="checkbox" name="canUpload"></td>

            
            <form method="POST" action="#">
                <input type="hidden" name="user" value="${normalUser.username}">
                <!--TODO: change action on click with jquery-->
                <td><input type="button" name="edit" value="Edit"></td>
                <td><input type="button" name="delete" value="Delete"></td>
            </form>
        </tr>

    </c:forEach>
</table>

<script src="/resources/js/admin.js"></script>

<%@include file="/WEB-INF/views/include/footer.jsp" %>