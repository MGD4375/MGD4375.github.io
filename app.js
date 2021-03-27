!async function foo() {
    const skillsRequest = await fetch('/skills.json');
    const skillsResult = await skillsRequest.json();

    const skills = skillsResult.sort((skillA, skillB) => {
        if (skillA.icon > skillB.icon) return 1
        if (skillA.icon < skillB.icon) return -1
        return 0
    })

    const rolesRequest = await fetch('/roles.json');
    const roles = await rolesRequest.json();

    const app = new Vue({
        el: '#app',
        data: {
            skills: skills,
            roles: roles
        }
    })
}();